	// until get input from keybaord
	// continue moving in direction
	// set timeout to continue forward while listening
	// to keys
	// on keypress change direction

	let allCells = document.querySelectorAll(".cell");
	let activeCellId = Number(allCells[0].id);
	let activeCell = allCells[0]
	activeCell.classList.add("activeRight")
	let movementInterval = null;

	let rightEnd = [18, 28, 38]
	let leftEnd = [10, 20, 30]
	let downEnd = [51, 52, 53, 54, 55, 56]
	let upEnd = [1,2,3,4,5,6]

	function GoRight() {
		if (movementInterval) {
			clearInterval(movementInterval)
		}

		movementInterval = setInterval(() => {
			activeCellId++

			// remove old cell
			activeCell.classList.remove("activeUp")
			activeCell.classList.remove("activeDown")
			activeCell.classList.remove("activeLeft")
			activeCell.classList.remove("activeRight")

			// check if reached end of row
			if (rightEnd.includes(activeCellId)) {
				activeCellId = activeCellId - 7
			} else {
				// console.log("not end row")
			}

			// hightlight new cell
			allCells.forEach((cell) => {
				// console.log(cell.id, activeCellId, typeof(cell.id), typeof(activeCellId))
				if (Number(cell.id) === Number(activeCellId)) {
					cell.classList.add("activeRight")
					activeCell = cell
				}
			})
		}, 400)
	}

	function GoLeft() {
		if (movementInterval) {
			clearInterval(movementInterval)
		}


		movementInterval = setInterval(() => {
			activeCellId--

			// remove old cell
			activeCell.classList.remove("activeUp")
			activeCell.classList.remove("activeDown")
			activeCell.classList.remove("activeLeft")
			activeCell.classList.remove("activeRight")

			// check if reached end of row
			if (leftEnd.includes(activeCellId)) {
				activeCellId = activeCellId + 7
			} else {
				// console.log("not end row")
			}

			// hightlight new cell
			allCells.forEach((cell) => {
				// console.log(cell.id, activeCellId, typeof(cell.id), typeof(activeCellId))
				if (Number(cell.id) === Number(activeCellId)) {
					cell.classList.add("activeLeft")
					activeCell = cell
				}
			})
		}, 400)
	}

	function GoUp() {

		if (movementInterval) {
			clearInterval(movementInterval)
		}

		movementInterval = setInterval(() => {
			activeCellId -= 10

			

			// remove old cell
			activeCell.classList.remove("activeUp")
			activeCell.classList.remove("activeDown")
			activeCell.classList.remove("activeLeft")
			activeCell.classList.remove("activeRight")

			// check if reached end of row
			if (upEnd.includes(activeCellId)) {
				activeCellId = activeCellId + 40
			} else {
				// console.log("not end row")
			}

			// hightlight new cell
			allCells.forEach((cell) => {
				// console.log(cell.id, activeCellId, typeof(cell.id), typeof(activeCellId))
				if (Number(cell.id) === Number(activeCellId)) {
					cell.classList.add("activeUp")
					activeCell = cell
				}
			})
		}, 400)
	}

	function GoDown() {	
		if (movementInterval) {
			clearInterval(movementInterval)
		}

		movementInterval = setInterval(() => {
			activeCellId  = activeCellId + 10
			

			// remove old cell
			activeCell.classList.remove("activeUp")
			activeCell.classList.remove("activeDown")
			activeCell.classList.remove("activeLeft")
			activeCell.classList.remove("activeRight")

			// check if reached end of row
			if (downEnd.includes(activeCellId)) {
				activeCellId = activeCellId - 40
			} else {
				// console.log("not end row")
			}

			// hightlight new cell
			allCells.forEach((cell) => {
				// console.log(cell.id, activeCellId, typeof(cell.id), typeof(activeCellId))
				if (Number(cell.id) === Number(activeCellId)) {
					cell.classList.add("activeDown")
					activeCell = cell
				}
			})
		}, 400)
	}



	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowUp") {
			GoUp()
		}


		if (e.key === "ArrowDown") {
			GoDown()
		}


		if (e.key === "ArrowLeft") {
			GoLeft()
		}


		if (e.key === "ArrowRight") {
			GoRight()
		}

	})


