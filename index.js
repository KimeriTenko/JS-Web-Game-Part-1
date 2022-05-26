//Background//
function tile(url, bottom, height, width) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100)
        }
    }
}

//Image duplication Code//
function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

//New Item Duplication Code//
function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

//Background Display//
let horizon = window.innerHeight / 1.75
let skyHeight = window.innerHeight - horizon
let grassHeight = horizon

tile('assets/skyHeight.png', 0, 0, horizon, window.innerWidth / 100, skyHeight / 100)
tile('assets/grass.png', 0, 0, window.innerWidth / 100, grassHeight / 100)

newImage('assets/well.png', 500, 425)
newImage('assets/tree.png', 200, 300)
newImage('assets/pine-tree.png', 250, 350)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/green-character.gif', 100, 100)

newItem('assets/sword.png', 160, 180)
newItem('assets/staff.png', 600, 100)
newItem('assets/sheild.png', 165, 185)


//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)

//let sword = document.createElement('img')
//sword.src = 'assets/sword.png'
//sword.position = 'fixed'
//sword.left = '500px'
//sword.bottom = '405px'
//document.body.append(sword)

//sword.addEventListener('click', function () {
  //  sword.remove()
//})

