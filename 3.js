function submitForm(){
    const form = document.getElementById('beautyproductform');
    const formData = new FormData(form);
    const selectedBeautyProduct = formData.get('beautyProduct');
    const result = document.getElementById('result');

    if (selectedBeautyProduct) {
       result.textContent = 'You have selected a Product!';
    }

    else{
        result.textContent = 'Please select..';
    }
}