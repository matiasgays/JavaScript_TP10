localStorage.clear();
$(document).ready(uploadJSON());
$(`#products-container`).click(addCart);
$(`#btn-cart`).mouseover(renderCart);
$(`#products-vehicle`).change(selectedFilter);

