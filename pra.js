  
/*基于http的socker.io*/

  var  server = require('http').Server;
  var io= require('socket.io')(server);
  io.on('connection',function (socket) {
  	// body...
  	socket.on('event',function(data){});
  	socket.on('disconnect',function(){});
  });
  server.listen(3000);






/*基于express的socket.io*/
  var app= require('express').createServer();
  var io= require('socket.io')(app);
  app.listen(3000);

  app.get('/',function(req,res){
  	res.sendfile(__dirname +'/index.html');
  });


  io.on('connect',function(socket){
  	socket.emit('news',{helle:'world'});
  	socket.on('other',function(data){
  		console.log(data)
  	})
  })


  /*基于koa的socket.io*/

  var app= require('koa')();
  var server= require('http').Server(app.callback());
  var io= require('socket.io')(server);
  io.on('connection',function(socket){

  });
  io.listen(3000);



  // 单独使用

  var io=require('socket.io')();
  io.on('connection'.function(socket){

  });
  io.listen(3000);




  // gulp的使用


  var gulp = require('gulp');
  var coffee= require('gulp-coffee');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var imagemin= require('gulp-imagemin');

  var path={
  	scripts:[],
  	images:''
  };
gulp.task('scripts',function(){
	return gulp.src(path.scripts);
	.pipe(coffee())
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('build.js'));
});

gulp.task('images',function(){
	return gulp.src(path.images)
	.pipe(imagemin({optimizationlevelyn：5}))
	.pipe(gulp.dest('build/img'));
});


gulp.task('watch',function(){
	gulp.watch(path.scripts,[scripts]);
	gulp.watch(path.images,[images]);
});


gulp.task('default',['scripts','images','watch']);


