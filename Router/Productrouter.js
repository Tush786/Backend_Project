const {Router}=require('express');
const {ProductModel}=require('../Module/ProductModule')
const cors=require('cors')
const ProductRouter=Router();

ProductRouter.post('/Travel',async(req,res)=>{
       const {
        Country,
        name,
        url,
        description,
        cost,
        title,
        heading,
        urls,
        url1,
        url2,
        url4,
        url3,
        guestDetail,
        description1
    }=req.body;

    const newTravelData=new ProductModel({
        Country,
        name,
        url,
        description,
        cost,
        title,
        heading,
        urls,
        url1,
        url2,
        url4,
        url3,
        guestDetail,
        description1
    })

    await newTravelData.save();
    res.send({msg:'Data Added Successfully'})
})

ProductRouter.get('/Travel',async(req,res)=>{
    try {
        const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "cost";
	
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

        const Country = await ProductModel.find({ Country: { $regex: search, $options: "i" } })
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

            const total = await ProductModel.countDocuments({
                Country: { $regex: search, $options: "i" },
            });

            const response = {
                error: false,
                total,
                page: page + 1,
                limit,
                Country,
            };
    
            res.status(200).json(response);

    } catch (error) {
        console.log(error);
		res.status(500).json({ error: true, message: "Internal Server Error" });
    }
})



module.exports={ProductRouter}