<?php
  include('connect.php') ;

  $user = json_decode(file_get_contents('php://input'),true); 
  if(isset($user['username']) && isset($user['password'])){
  
  
  $sql = "SELECT * FROM employer where numPers='".$user['username']."' AND PrenomPers='".$user['password']."'";
  $result = mysqli_query($con,$sql);
  $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
  
  if(!empty($row)){
  echo json_encode(array('status'=>'200','data'=>$row));
  }
  else{
    echo json_encode(array('status'=>'300'));
  }
  
  }
  
  mysqli_close($con);
  ?>
  