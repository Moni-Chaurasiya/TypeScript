 abstract class TakePhotos{   // if we declare this class as abstract we cannot creat new object from this class
//class TakePhoto{   
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void
    getReelTime():number{
        return 8
    }
}
//const moniC = new TakePhoto("test","Test")
class Instagrams extends TakePhotos{
   constructor(
    public cameraMode:string,
    public filter:string,
    public burst:number

   ){
    super(cameraMode,filter)
   }
   getSepia():void{

   }
}
const moniC = new Instagrams("test","Test",3)