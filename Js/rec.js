
(function() {
    const recProductsList = document.querySelector("#recProdContainer")

    //---------------------------------------------------Hämtar products.json fil ---------------------------------------------------
    
    const getProducts = async function() {
        // Await keyword
            // Stoppar JS.motorn att assigna värdet till response variabeln tills löftet har resolved
    
        const response = await fetch("data/products.json");
        console.log(response);
    
        //! Kanske onödigt så länge filerna finns lokalt o projektet
        if (response.status !== 200) {
            // Throw-keyword --> New error object
            // Om vi kastar ett error inuti en async funktion så blir promiset rejectat och vi hoppar ur funktionen
            throw new Error("Cannot fetch the data");
        }
    
        // .json() retunerar ett Promise - reject / resolved - Går ej att spara direkt i en variabel
            // Genom await-keyword inväntar att Promise-objektet blivit resolved
            // Lagrar sen i data-variabeln
        const data = await response.json();
        console.log(data);
    
        return data;
    
    }
    
    // Då getTodos är async så retunerar den ett promise och kommer inte servera datan - Fast vi retunerar den
        // Vi behöver .then();
    
    getProducts()
        // Om datan kan levereras ritar vi ut produkterna i DOM:en 
        .then(data => drawRecProd(data))
        .catch(err => console.log("Rejected:", err.message));


    //--------------------------------------------------- Ritar ut products.json ---------------------------------------------------

    function drawRecProd(arr) {

        arr.forEach((elem) => {
            recProductsList.innerHTML += `
            <div class="col-auto text-center ">
                <li class="rec-product">
                    <i class="${elem.image}"></i>
                    <h3 class="subheading">${elem.title}</h3>
                </li>
            </div>
            `
            addItem()
        })

        // Flytta ut sen

        
        
    }
    
    function addItem() {
        const allRecProducts = document.querySelectorAll(".rec-product");
        console.log(allRecProducts);

        allRecProducts.forEach((item, index) => {
            item.addEventListener("click", () => {

                console.log("clicked");
                console.log(item);
                console.log(index);

            })
        })


    }












})()

