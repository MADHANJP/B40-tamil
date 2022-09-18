var arr=[
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
  
      "id": 2,
      "title": "qui est esse"
    },
    {
   
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    },
    {
     
      "id": 4,
      "title": "eum et est occaecati"
    }];
  //for loop
    for(var i=0;i<arr.length;i++){
    console.log(arr[i].id,arr[i].title);
    }
  for(var i=0;i<arr.length;i++){
  // for in
  for( var key in arr[i]){
  console.log(key,arr[i][key]);  
  }
  } 
  