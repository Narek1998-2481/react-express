
const image_push = (app) => {
    app.post("/image_push", (req, res) => {
        console.log(req.data);
        // console.log(req.body.image);
        res.send("ok");
    });
}
export default image_push;