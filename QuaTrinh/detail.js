function redirectToDetail() {
    try {
        // Chuyển hướng đến trang chi tiết mà không làm tải lại trang hoàn toàn
        window.location.href = 'article-detail.html';
    } catch (error) {
        console.error('Error redirecting to detail page:', error);
    }
}
