const express = require('express');
const router = express.Router();
const path = require('path');
const txtdata = require( path.resolve( __dirname, "../Data" ));
const save = require(path.resolve( __dirname, "../management"));
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/image')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ file.originalname) // เปลี่ยนชื่อไฟล
    }

});

const fileFilter = function(req, file, cb){
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter
});

router.post('/', function(request, response) {

    response.render('login.ejs');

	
   
});
router.get('/', function(request, response) {
        response.render('login.ejs');
   
});


router.post('/login', function(request, response) {
	 const username = request.body.username;
	 const password = request.body.password;

	 const Temp = txtdata.findByUsername(username);
	 if (username && password) {
		if (Temp !== undefined){
			if(Temp.username == username && Temp.password == password){
				request.session.login = true;
				request.session.username = username;
				response.redirect('/Profile');
			}
            else{
                response.redirect('/404');
            }
		}
        else
        response.redirect('/404');
	
	} else {
		response.send('Please enter Username and Password!');
	}

});



router.get('/Profile', function(request, response) {
    if(request.session.login){
        const datatemp = txtdata.findByUsername(request.session.username);
        response.render('Profile.ejs',{datatemp:datatemp});
        }
    else {response.redirect('/'); }
        
    });

router.post('/editProfile',function(request, response){
    const datatemp = txtdata.findByUsername(request.session.username);
    response.render('editProfile.ejs',{datatemp:datatemp});

});

router.post('/saveProfile',upload.single("uploadfile"),function(request, response){
    if(request.session.username){
        let datatemp = txtdata.findAll(request.session.username);
        for (var i = 0; i < datatemp.length; i++) {
            if (datatemp[i].username == request.session.username){
                datatemp[i].name = request.body.name
                datatemp[i].surname = request.body.surname
                datatemp[i].phone = request.body.phone
                datatemp[i].email = request.body.email
                datatemp [i].desc = request.body.description
            if(request.file !== undefined){
                    datatemp[i].image = request.file.filename
                }
                
            }
          } 
          const chk = save.saveFile(datatemp);
          console.log(chk);
          response.redirect('/Profile');
    }
   
});

router.get('/logout', function(request, response) {
    request.session.destroy((err)=>{
        response.render('login.ejs');
       })
   
});

router.get('/404', function(request, response) {

        response.render('404.ejs');
     
   
});



module.exports = router