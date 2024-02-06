async function calculateTotalPrice(organizationId, totalDistance , itemType){
    try{
        const basePrice = 10;
        const perKmPrice = itemType == 'perishable' ? 1.5 : 1 ;

        const totalPrice = basePrice + (perKmPrice * totalDistance);

        return totalPrice
    }catch (error){
        console.error('error calculating total price', error);
        throw new Error('Error Caluculating total price ');
    }
}

module.exports = {calculateTotalPrice};