const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScore = document.querySelector('[data-your-score]')
const SELECTIONS  = [{
   name: 'rock',
   beats:'scissors , lizard'},
   {
name: 'paper',
beats: 'rock,spock'},
{
name: 'scissors',
beats: 'paper , lizard'},
{
name: 'lizard',
beats: 'spock , paper'},
{
name: 'spock',
beats: 'scissors , rock'},

]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
      const selectionName =  selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selectionName)
    })
  })

  function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner= isWinner (selection, computerSelection)
    const computerWinnner = isWinner(computerSelection,selection)
    addSelectionResult(computerSelection, computerWinnner)
    addSelectionResult(selection, yourWinner)
    if (yourWinner)incrementScore(yourscoreSpan)
    if (computerWinnner)incrementScore(computerScoreSpan)
    

  }
  function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1

  }
function addSelectionResult(selction, winner){

}

function isWinner(selection, opponentSelecton){
  return selection.beats === opponentSelecton.name
}

  function randomSelection(){
   
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
  }