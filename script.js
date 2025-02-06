document.getElementById("getCodeBtn").addEventListener("click", function() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Vui lòng nhập tên người dùng!");
    return;
  }

  // Tạo mã ngẫu nhiên 6 ký tự gồm chữ và số
  const generateRandomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const userCode = generateRandomCode();  // Mã 6 ký tự
  const fullCode = generateRandomCode();  // Mã 32 ký tự

  const apiResponse = {
    status: "success",
    code: fullCode
  };

  // Hiển thị mã 32 ký tự
  document.getElementById("status").innerHTML = `Status: ${apiResponse.status}`;
  document.getElementById("code").innerHTML = `Code: ${apiResponse.code}`;

  // Gửi yêu cầu đến server giả lập (có thể thay bằng API thực)
  fetch(`/get-code?user=${username}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("generatedCode").innerHTML = `Mã của người dùng: ${userCode}`;
    })
    .catch(error => {
      console.error('Lỗi:', error);
    });
});
