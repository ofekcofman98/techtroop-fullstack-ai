const PM = require('./main')

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity 
  const picManager = new PM()
  expect(picManager.pictureURLs.length).toBe(0)
  
  picManager.addPicture("some_url")
  expect(picManager.pictureURLs.length).toBe(1)           //test
  expect(picManager.pictureURLs).toContain("some_url")    //double check 
})


test("removePicture should remove a picture URL from the pictureURLs array", function () {
    const picManager = new PM()
    
    const testUrl = "https://images.pexels.com/photos/35424184/pexels-photo-35424184.jpeg"
    picManager.addPicture(testUrl)
    
    expect(picManager.pictureURLs.length).toBe(1)
    
    picManager.removePicture(testUrl)
    
    expect(picManager.pictureURLs.length).toBe(0)
    expect(picManager.pictureURLs).not.toContain(testUrl)
})