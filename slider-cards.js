const cardOne = document.querySelector(".pricing-cards-one")
const cardTwo = document.querySelector(".pricing-cards-two")

const buttonBack = document.querySelector(".pricing-switches-back")
const buttonForward = document.querySelector(".pricing-switches-forward")

const montly = document.querySelector(".pricing-buttons-monthly")
const yearly = document.querySelector(".pricing-buttons-yearly")

const titleOne = document.querySelector(".pricing-cards-one-title")
const titleTwo = document.querySelector(".pricing-cards-two-title")

const cardBtnOne = document.querySelector(".pricing-cards-one-btn")
const cardBtnTwo = document.querySelector(".pricing-cards-two-btn")

const listOne = document.querySelector(".pricing-cards-one-list")
const listTwo = document.querySelector(".pricing-cards-two-list")

buttonForward.addEventListener("click", function(){
  cardOne.classList.toggle("pricing-cards-one")
  cardOne.classList.toggle("pricing-cards-two")

  titleOne.classList.toggle("pricing-cards-one-title")
  titleOne.classList.toggle("pricing-cards-two-title")

  cardBtnOne.classList.toggle("pricing-cards-one-btn")
  cardBtnOne.classList.toggle("pricing-cards-two-btn")

  listOne.classList.toggle("pricing-cards-one-list")
  listOne.classList.toggle("pricing-cards-two-list")


  cardTwo.classList.toggle("pricing-cards-two")
  cardTwo.classList.toggle("pricing-cards-one")

  titleTwo.classList.toggle("pricing-cards-two-title")
  titleTwo.classList.toggle("pricing-cards-one-title")

  cardBtnTwo.classList.toggle("pricing-cards-one-btn")
  cardBtnTwo.classList.toggle("pricing-cards-two-btn")

  listTwo.classList.toggle("pricing-cards-one-list")
  listTwo.classList.toggle("pricing-cards-two-list")
})

buttonBack.addEventListener("click", function(){
  cardOne.classList.toggle("pricing-cards-one")
  cardOne.classList.toggle("pricing-cards-two")

  titleOne.classList.toggle("pricing-cards-one-title")
  titleOne.classList.toggle("pricing-cards-two-title")

  cardBtnOne.classList.toggle("pricing-cards-one-btn")
  cardBtnOne.classList.toggle("pricing-cards-two-btn")

  listOne.classList.toggle("pricing-cards-one-list")
  listOne.classList.toggle("pricing-cards-two-list")


  cardTwo.classList.toggle("pricing-cards-two")
  cardTwo.classList.toggle("pricing-cards-one")

  titleTwo.classList.toggle("pricing-cards-two-title")
  titleTwo.classList.toggle("pricing-cards-one-title")

  cardBtnTwo.classList.toggle("pricing-cards-one-btn")
  cardBtnTwo.classList.toggle("pricing-cards-two-btn")

  listTwo.classList.toggle("pricing-cards-one-list")
  listTwo.classList.toggle("pricing-cards-two-list")
})

montly.addEventListener("click", function(){
  cardOne.classList.remove("pricing-cards-one")
  cardOne.classList.add("pricing-cards-two")
  titleOne.classList.remove("pricing-cards-one-title")
  titleOne.classList.add("pricing-cards-two-title")
  cardBtnOne.classList.remove("pricing-cards-one-btn")
  cardBtnOne.classList.add("pricing-cards-two-btn")

  cardTwo.classList.remove("pricing-cards-two")
  cardTwo.classList.add("pricing-cards-one")
  titleTwo.classList.remove("pricing-cards-two-title")
  titleTwo.classList.add("pricing-cards-one-title")
  cardBtnTwo.classList.add("pricing-cards-one-btn")
  cardBtnTwo.classList.remove("pricing-cards-two-btn")
})

yearly.addEventListener("click", function(){
  cardOne.classList.add("pricing-cards-one")
  cardOne.classList.remove("pricing-cards-two")
  titleOne.classList.add("pricing-cards-one-title")
  titleOne.classList.remove("pricing-cards-two-title")
  cardBtnOne.classList.add("pricing-cards-one-btn")
  cardBtnOne.classList.remove("pricing-cards-two-btn")

  cardTwo.classList.add("pricing-cards-two")
  cardTwo.classList.remove("pricing-cards-one")
  titleTwo.classList.add("pricing-cards-two-title")
  titleTwo.classList.remove("pricing-cards-one-title")
  cardBtnTwo.classList.remove("pricing-cards-one-btn")
  cardBtnTwo.classList.add("pricing-cards-two-btn")
})
