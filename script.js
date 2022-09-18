let resume=[{
 
    "name": "madhan",
    "email": "iamhappy@gmail.com",
    "phone":998899889,
    "degree": "b.e",
      "city": "chennai",
         "company": "Suzuki motor",
      "position": "executive prod"
    }
     ,
     {
      "institution": "pamhss",
      "area": "chennai",
      "courses": "BE"
    }

,
 {
      "language": "Tamil"
    },
  {

hobby: "bike riding"
   
    }
  ]
    for(var i=0;i<resume.length;i++)
 {
  for( var key in resume[i]){
  console.log(key,resume[i][key]);
}
 }
