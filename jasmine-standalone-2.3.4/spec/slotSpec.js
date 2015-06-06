describe("Play Button", function() {
	
	describe("The first iteration", function() {
		it("should select a different image", function() {
			
			var slot = new Slot();
			var startImage = slot.getVisibleImage();
			
			slot.oneIteration();
			
			var endImage = slot.getVisibleImage(); 
			
			expect(endImage).not.toEqual(startImage);
		});
		
	});
		
	describe("The process if iteration surpasses number of images", function() {
		it("should still select an image", function() {
			
			
			var endImage = slot.getVisibleImage(); 
			
			expect(endImage).not.toEqual(startImage);

		});
	});
		
	
	
	it("should start spinning the animations", function() {


	});
	
	it("should start the giving spin for a specified time", function() {


	});
	
	it("should stop the spinning", function() {


	});

	it("should select the image", function() {

	});
		
});