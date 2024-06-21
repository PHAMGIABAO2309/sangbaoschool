document.getElementById('feedbackButton').addEventListener('click', function() {
    document.getElementById('feedbackForm').classList.add('show');
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('feedbackForm').classList.remove('show');
});

document.getElementById('feedbackFormElement').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc submit form mặc định

    // Hiển thị phần loading
    document.getElementById('feedbackForm').classList.remove('show');
    document.getElementById('loading').classList.add('show');

    // Giả lập quá trình xử lý bằng cách sử dụng setTimeout
    setTimeout(function() {
        // Ẩn phần loading và hiển thị thông báo cảm ơn
        document.getElementById('loading').classList.remove('show');
        document.getElementById('thankYou').classList.add('show');
    }, 2000); // Thời gian xử lý giả lập là 2 giây
});

document.getElementById('closeThankYouButton').addEventListener('click', function() {
    document.getElementById('thankYou').classList.remove('show');
});
