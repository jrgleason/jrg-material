import Koa from "koa";

const RESUME_URL = process.env.RESUME_URL ||
                   'https://docs.google.com/document/d/1xrqve90hloOYGR3RSCvwXJBXq_NQR5kmNfrxKYSveKk/edit?usp=sharing';

class ResumeKoa extends Koa{
  constructor(){
    super();
    this.url = RESUME_URL;
    this.use(this.redirectToResume.bind(this));
  }
  redirectToResume(ctx){
    console.log("In Login");
    ctx.redirect(this.url);
  }
}

export { ResumeKoa as JRGResume }