(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt ($counter.textContent);
        if($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }

        if (($counter.textContent % 3 === 0)) {
            window.alert("3の倍数です！");
        }

    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++){
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler (e))
    }
}) ();


