const filterItem = document.querySelector(".category-filter-list");
const filterImg = document.querySelectorAll(".gallery-image");
const filterIcon = document.getElementsByClassName("category-filter")[0];
const filterList = document.getElementsByClassName("category-filter-list")[0];

// click filtericon to show menu filter List
filterIcon.onclick = () => {
  filterList.classList.toggle("show");
  filterList.classList.toggle("hide");
}
filterItem.onclick = (selectedItem) => {
  filterList.classList.remove("show");
  filterList.classList.add("hide");
  console.log(filterList)
  if(selectedItem.target.classList.contains("category-item"))
  {
    filterItem.querySelector(".active").classList.remove("active");
    selectedItem.target.classList.add("active");
    let filterName = selectedItem.target.getAttribute("data-name");
    if( filterName == "all") 
    {
      filterImg.forEach((image) => {
        image.classList.remove("hide");
        image.classList.add("show");
      });
    }
    else {
      filterImg.forEach((image) => {
        let filterImage = image.getAttribute("data-name");
        if( filterImage == filterName)
        {
          image.classList.add("show");
          image.classList.remove("hide");
        }
        else {
          image.classList.remove("show");
          image.classList.add("hide");
        }
  
      });
    }
  }
}