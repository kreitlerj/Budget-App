// Budget Controller
var budgetController = (function () {



})();


// UI Controller
var UIController = (function () {

    DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add_description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();


// Global App Controller
var controller = (function (budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function () {
        // Retrieve field input data
        var input = UICtrl.getinput();
        console.log(input);
        // Add item to budget contoller

        // Add item to the UI

        // Calculate the budget

        // Display the budget
    }


    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);