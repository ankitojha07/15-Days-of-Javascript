export const logger = (req,res,next)=>{
    console.log("I am the middleware function!");
    next();
}