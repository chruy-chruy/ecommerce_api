const updateProductEntity = ({ data  }) => {
    const { id } = data
    const { product_name, barcode, details, quantity, price, cost, date_received, date_expire, img } = data.product;
    const status = "active"
    // console.log(data);


    if (!product_name) {
        throw new Error("product name is required ");
    }
    if (!barcode) {
        throw new Error("barcode is required" );
    }
    if (!details) {
        throw new Error("details is required " );
    }
    if (!quantity) {
        throw new Error("quantity i required " );
    }
    if (!price) {
        throw new Error("price is required " );
    }
    if (!cost) {
        throw new Error("cost is required " );
    }
    if (!date_received) {
        throw new Error("date_received is required " );
    }
    if (!date_expire) {
        throw new Error("date_expire is required " );
    }
    if (!img) {
        throw new Error("image is required " );
    }




    return Object.freeze({
        getProductName: () => product_name,
        getBarcode: () => barcode,
        getDetails: () => details,
        getQuantity: () => quantity,
        getPrice: () => price,
        getStatus: () => status,
        getDateReceived: () => date_received,
        getCost: () => cost,
        getDateExpire: () => date_expire,
        getImg: () => img,
        getId: () => id,
    })

}
module.exports = updateProductEntity;