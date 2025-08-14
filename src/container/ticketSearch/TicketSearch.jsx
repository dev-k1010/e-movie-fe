// import {
//   AutoComplete,
//   Button,
//   Calendar,
//   Card,
//   DatePicker,
//   Input,
//   List,
//   TimePicker,
// } from "antd";
// import Search from "antd/es/input/Search";
// import moment from "moment";
// import React, { useEffect, useState } from "react";

// // Dữ liệu phim mẫu
// const allMovies = [
//   { id: 1, title: "Inception" },
//   { id: 2, title: "Interstellar" },
//   { id: 3, title: "The Dark Knight" },
//   { id: 4, title: "Avengers: Endgame" },
//   { id: 5, title: "Spider-Man: No Way Home" },
//   { id: 6, title: "The Matrix" },
//   { id: 7, title: "The Godfather" },
//   { id: 8, title: "Pulp Fiction" },
//   { id: 9, title: "Fight Club" },
//   { id: 10, title: "Forrest Gump" },
//   { id: 11, title: "The Shawshank Redemption" },
//   { id: 12, title: "The Lord of the Rings: The Return of the King" },
//   { id: 13, title: "Titanic" },
//   { id: 14, title: "Gladiator" },
//   { id: 15, title: "Black Panther" },
// ];

// export default function TicketSearch({ listPhim }) {
//   const [searchMode, setSearchMode] = useState("phim"); // "phim", "rap", "xuat"

//   /**
//    * Nếu người dùng không nhận => ""
//    * Hiện tất cả Phim
//    */
//   const [searchText, setSearchText] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState(allMovies);

//   const handleSearch = (value) => {
//     setSearchText(value);
//     const keyword = value.toLowerCase();

//     const results = keyword
//       ? allMovies.filter((movie) => movie.title.toLowerCase().includes(keyword))
//       : allMovies;

//     setFilteredMovies(results);
//   };

//   useEffect(() => {
//     handleSearch("");
//   }, []);

//   const onPanelChange = (value, mode) => {
//     console.log(value.format("YYYY-MM-DD"), mode);
//   };

//   const demoLayout = () => (
//     <div className="w-full">
//       <div>
//         <Input.Search
//           placeholder="Tìm phim theo tên..."
//           allowClear
//           enterButton={
//             <Button
//               type="primary"
//               style={{
//                 backgroundColor: "#D00001",
//                 border: 0,
//                 fontFamily:"sans-serif",
//                 fontWeight: 600,
//                 textTransform:"uppercase"
//               }}
//             >
//               Tìm
//             </Button>
//           }
//           size="large"
//           value={searchText}
//           onChange={(e) => handleSearch(e.target.value)}
//         />
//       </div>

//       {/* Chỉ phần này mới scroll */}
//       <div className="mt-4 h-[250px] w-full overflow-auto">
//         <div className="flex flex-col gap-[6px] ">
//           {filteredMovies.map((item) => (
//             <div
//               key={item.id}
//               className="font-serif text-lg bg-[#1e1e1e] text-white px-4 py-2 rounded"
//             >
//               {item.title}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return <div>{demoLayout()}</div>;
// }
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TicketSearch() {
  const { listPhim } = useSelector((state) => state.quanLyPhimReducer);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Đồng bộ lại filteredMovies khi listPhim thay đổi
  useEffect(() => {
    // luôn đồng bộ, không cần điều kiện length > 0
    setFilteredMovies(listPhim || []);
  }, [listPhim]);

  

  // Hàm bỏ dấu tiếng Việt
const removeVietnameseTones = (str) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');

// Hàm đo khoảng cách Levenshtein (fuzzy match)
const levenshtein = (a, b) => {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
};

const handleSearch = (e) => {
  const keywordRaw = e.target.value;
  const keyword = removeVietnameseTones(keywordRaw.toLowerCase());
  setSearchTerm(keywordRaw); // giữ nguyên input người dùng

  if (!keyword) {
    setFilteredMovies(listPhim);
    return;
  }

  // Tạo danh sách kết quả kèm điểm relevance
  const scoredResults = listPhim.map((movie) => {
    const tenPhim = removeVietnameseTones(movie.tenPhim.toLowerCase());
    const biDanh = removeVietnameseTones(movie.biDanh.toLowerCase());
    const maPhim = movie.maPhim.toString();

    let score = 0;

    // Exact match được điểm cao nhất
    if (tenPhim.includes(keyword)) score += 3;
    if (biDanh.includes(keyword)) score += 2;
    if (maPhim.includes(keyword)) score += 1;

    // Fuzzy match: cho điểm nếu sai chính tả <= 2 ký tự
    if (levenshtein(keyword, tenPhim) <= 2) score += 1;
    if (levenshtein(keyword, biDanh) <= 2) score += 1;

    return { ...movie, _score: score };
  });

  // Lọc bỏ kết quả không khớp chút nào
  const filtered = scoredResults.filter((m) => m._score > 0);

  // Sắp xếp theo điểm giảm dần (giống Google ưu tiên nhất trước)
  filtered.sort((a, b) => b._score - a._score);

  setFilteredMovies(filtered);
};


  return (
    <div className="w-full">
      <input
        className="w-full h-10 p-5"
        type="text"
        placeholder="Nhập tên phim, mã phim, hoặc biệt danh..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="mt-4 h-[250px] w-full overflow-auto">
        <div className="flex flex-col gap-[6px]">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((item) => (
              <div
                key={item.maPhim}
                className="font-serif text-lg bg-[#1e1e1e] text-white px-4 py-2 rounded h-10"
              >
                {item.tenPhim}
              </div>
            ))
          ) : (
            <p>Không tìm thấy phim nào</p>
          )}
        </div>
      </div>
    </div>
  );
}
