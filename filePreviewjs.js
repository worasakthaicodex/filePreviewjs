(function($) {
	  $.fn.filePreviewjs = function(options) {
	    return this.each(function() {
	      var $container = $(this);
	      var settings = $.extend(
	        {
	        	fileid: 1,
	        	fileurl:null
	        },
	        options
	      );

	      // สร้าง input file โดยใช้ settings.fileid
	      var $input = $('<input>', {
	        type: 'file',
	        name: 'file'+settings.fileid,
	        id: "imageInput"+settings.fileid,
	        class:'custom-file-input',
	        accept: 'image/*',
	      });

	      // สร้าง input file โดยใช้ settings.fileid
	      var $input2 = $('<input>', {
	        type: 'hidden',
	        name: 'oldfile'+settings.fileid,
	        id: "oldfiles"+settings.fileid,
	        value:settings.fileurl,
	      });

	      var $label = $('<label>', {
	        'for': "imageInput"+settings.fileid,
	        class: 'custom-file-label',
	      });

	      // สร้างรูปภาพและปุ่มลบ
	      var $image = $('<img>', {
	        src: 'default-image.jpg',
	        style: 'display: none;',
	        id: "selectedImage"+settings.fileid,
	      });
	      // สร้างรูปภาพและปุ่มลบ
	      var $button = $('<button>', {
	    	 type: 'button',
	    	class: 'delete-button',
	        style: 'display: none;',
	        id: "delete-button"+settings.fileid,
	      });
	      
	      
	      var $icon = $('<i>', {
	          class: 'fa fa-trash',
	        });

	        $button.append($icon);
	      
	      
	      // เพิ่ม input file, รูปภาพ, และปุ่มลบลงใน label
	      $label.append($input,$input2,$image,$button);

	      // เพิ่ม label ลงในคอนเทนเนอร์
	      $container.append($label);

	      // เมื่อ input file ถูกเปลี่ยน
	      $input.on('change', function(event) {
	    	  handleFileChange(event,settings.fileid);
	      });

	      // เมื่อคลิกที่ปุ่มลบ
	      $button.on('click', function() {
	    	  deleteImage(event,settings.fileid);
	      });

	      
	      addFile(settings.fileurl,settings.fileid);
	      
	      
	      // ตัวอย่างฟังก์ชัน handleFileChange
	      function handleFileChange(event,id) {
	    	  $("#selectedImage"+id).show();
	    	  $("#delete-button"+id).show();

	    	  var input = event.target;
	    	  var preview = document.getElementById('selectedImage'+id);

	    	  
	    	  if (input.files && input.files[0]) {
	    	    var reader = new FileReader();

	    	    reader.onload = function(e) {
	    	      preview.src = e.target.result;
	    	    }

	    	    reader.readAsDataURL(input.files[0]);
	    	   
	    	    
	    	  }
	      }

	      // ตัวอย่างฟังก์ชัน deleteImage
	      function deleteImage(event,id) {
	    	  var preview = document.getElementById('selectedImage'+id);
	          var deleteButton = event.target;
	          var input = document.getElementById('imageInput'+id);
	          var input2 = document.getElementById('oldfiles'+id);
	          preview.src = ''; // เคลียร์รูปภาพ
	          input.value = ''; // ลบไฟล์ที่ถูกเลือกจาก <input>
	          input2.value = ''; // ลบไฟล์ที่ถูกเลือกจาก <input>
	          $("#delete-button"+id).hide();
	          $("#selectedImage"+id).hide();
	      }
	      
	      function addFile(url,id){
	    	  
	    	  
	    	  if (isImageUrl(url)) {
	    		  $("#selectedImage"+id).show();
		    	  $("#delete-button"+id).show();
		    	  var preview = document.getElementById('selectedImage'+id);
		    	  preview.src = url;  
	    	  }
	        }
	      
	      function isImageUrl(url) {
	    	  // หาก URL ลงท้ายด้วย .jpg, .jpeg, .png, .gif, .bmp, .webp, .svg หรือ .ico
	    	  return /\.(jpg|jpeg|png|gif|bmp|webp|svg|ico)$/i.test(url);
	    	}
	      
	    });
	  };
	})(jQuery);
