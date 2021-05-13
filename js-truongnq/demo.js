class Product {
    constructor(id, name, categoryId, saleDate, quality, isDelete) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.saleDate = saleDate;
        this.quality = quality;
        this.isDelete = isDelete;
    }
}

function createListProduct() {
    listProduct = [];
    for (i = 0; i < 10; ++i) {
        listProduct.push(new Product(i + 1, "Iphone", i + 1, new Date(2021, 6, 1), 100, 0));
    }
    return listProduct;
}

function filterProductById(listProduct, idProduct) {
    listProduct.forEach(product => {
        if (product.id == idProduct) {
            return product;
        }
    });
    // for(int i = 0;i < listProduct.length; i++) {
    //     if(product.id == idProduct) {
    //         return product;
    //     }
    // }
    return null;
}

function filterProductByQuality(listProduct) {
    arrayProduct = [];
    listProduct.forEach(product => {
        if (product.quality > 0 && product.isDelete == 0) {
            arrayProduct += product;
        }
    });
    // var length= listProduct.length
    // for(int i = 0;i < length; i++) {
    //     if(product.quality > 0 && product.isDelete == 0) {
    //         arrayProduct += product;
    //     }
    // }

    return arrayProduct;
}

function filterProductBySaleDate(listProduct) {
    arrayProduct = [];
    listProduct.forEach(product => {
        if (product.saleDate > new Date() && product.isDelete == 0) {
            arrayProduct += product;
        }
    });
    // var length = listProduct.length
    // for(int i = 0;i < length; i++) {
    //     if(product.quality > 0 && product.isDelete == 0) {
    //         arrayProduct += product;
    //     }
    // }

    return arrayProduct;
}

function totalProduct(listProduct) {
    return listProduct.reduce((accumulator, currentValue, currentIndex, originArray) => {
            if (currentValue.isDelete == 0) {
                return accumulator + currentValue.quality;
            }
            return accumulator;
        }, 0)
        // var accumulator = 0;
        // var length = listProduct.length
        // for (i = 0; i < length; i++) {
        //     if (listProduct[i].isDelete == 0) {
        //         accumulator+= listProduct[i].quality;
        //     }
        // }
}

function isHaveProductInCategory(listProduct, categoryId) {
    return listProduct.some(product => {
            return product.categoryId == categoryId;
        })
        // var length = listProduct.length
        // for (i = 0; i < length; i++) {
        //     if (listProduct[i].categoryId == categoryId) {
        //         return true;
        //     }
        // }
        // return false;
}

function filterProductBySaleDate2(listProduct) {
    tempList = [];
    listProduct.forEach(product => {
            if (product.saleDate > new Date() && product.quality > 0) {
                tempList.push(new Array(product.id, product.name));
            }
        })
        // var length = listProduct.length
        // for (i = 0; i < length; i++) {
        //     if (listProduct[i].saleDate > new Date() && listProduct[i].quality > 0) {
        //         tempList.push(new Array(listProduct[i].id, listProduct[i].name));
        //     }
        // }

    return tempList;
}