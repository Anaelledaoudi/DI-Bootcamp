class Video{
	constructor(title, uploader, time){
		this.title=title;
		this.uploader=uploader;
		this.time=time;
		//bonus
		this.data=[this.title,this.uploader,this.time];
	}
	watch(){
		console.log(`${this.uploader} watch all ${this.time}s of ${this.title}`);
	}

}
const video1=new Video("funny-Moment","Anaelle","120");
video1.watch();
const video2=new Video("clip","Sarah","220");
video2.watch();
//bonus
const video3=new Video("heyy","lola","200");
const arrVideo=[video1.data,video2.data,video3.data,"",""];
console.log(arrVideo);
//bonus didnt work...
// arrVideo.forEach((elm,index)=>{
// 	"videoData"+index=new Video(elm[0],elm[1],elm[2]);
// 	console.log("videoData"+index);
// })