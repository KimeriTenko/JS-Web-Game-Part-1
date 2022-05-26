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
    let object = newImage(url, left, bottom){
        object.addEventListener('dblclick', () => {
            object.remove()
        })
}
}

newImage('assets/well.png', 250, 350)
newImage('assets/tree.png', 250, 350)
newImage('assets/sky.png', 250, 350)
newImage('assets/red-character.gif', 250, 350)
newImage('assets/pine-tree.png', 250, 350)
newImage('assets/pillar.png', 250, 350)
newImage('assets/log.png', 250, 350)
newImage('assets/green-charcter.gif', 250, 350)
newImage('assets/log.png', 250, 350)
newImage('assets/grass.png', 250, 350)
newImage('assets/boulder.png', 250, 350)
newImage('assets/crate.png', 250, 350)

newItem('assets/sword.png', 160, 180)
newItem('assets/staff.png', 160, 180)
newItem('assets/shield.png', 160, 180)
newItem('assets/rock.png', 160, 180)

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

