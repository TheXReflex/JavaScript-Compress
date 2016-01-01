function bitify(byte){
  var curr, prev, start = false, bit_count = 1, output = "";
  byte = byte + " ";
  for(var i = 0; i < byte.length; i ++){
	curr = byte.charAt(i);
	
	if(!start){
	  
	  if(curr == prev){
		bit_count ++;
	  } else {
		if(bit_count >= 2){
		  output += bit_count + prev;
		} else {
		  output += prev;
		}
		bit_count = 1;
	  }
	  
	} else {
	  start = true;
	}
	
	prev = curr;
  }
  
  return output;
}

function compress(uncompressed){
  //define variables
  var curr, prev, byte_start, bytes, byte_count, input, output;
  byte_start = true;
  byte_count = 1;
  input = uncompressed + " ";
  output = "";
  
  bytes = input.split(" "); 
  
  //loop through bytes
  for(var i = 0; i < bytes.length; i ++){
	
	curr = bytes[i];
	
	if(!byte_start){
	  
	  if(curr == prev){
		byte_count ++;
	  } else {
		
		if(byte_count >= 2){
		  output += byte_count + "{" + bitimize(prev) + "}";
		} else {
		  output += "{"+bitimize(prev)+"}";
		}
		
		
		byte_count = 1;
	  }
	  
	} else {
	  byte_start = false;
	}
	
	//update previous
	prev = curr;
  }
  
  return output;
}
