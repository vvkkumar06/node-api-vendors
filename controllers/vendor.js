const router = require('express').Router();


router.get('/', (req,res) => {
    console.log('Fetching vendors...')
    res.json(vendors);
});

router.post('/', (req,res) => {
    let vendor = req.body;
    console.log(vendor);
    vendor.id = Math.floor(Math.random() * 1000000000);
    vendors.push(vendor);
    res.json({
        message: 'Successfully registered'
    });
});

router.put('/', (req,res) => {
    let updatedVendor = req.body;
    vendors = vendors
        .map(vendor => {
            if (vendor.id === Number(req.params.id)) {
                return updatedVendor;
            }
            return vendor;
        });
    res.json({
        message: 'Successfully updated'
    })
});

router.delete('/', (req,res) => {
    vendors = vendors.filter( vendor => vendor.id !== Number(req.params.id));
    res.json({
        message: 'Successfully deleted vendor'
    });
});



module.exports = router;