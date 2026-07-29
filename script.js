fetch("qc_birds.json")

.then(response => response.json())

.then(data => {

    document.getElementById("species").innerHTML =
        data.species_count;

    document.getElementById("updated").innerHTML =
        data.updated;


    let rows = "";


    data.observations.forEach(bird => {

        rows += `
        <tr>
            <td>${bird.species}</td>
            <td>${bird.location}</td>
            <td>${bird.time}</td>
        </tr>
        `;

    });


    document.getElementById("birds").innerHTML = rows;


})

.catch(error => {

    document.getElementById("birds").innerHTML =
    "<tr><td colspan='3'>Waiting for bird data...</td></tr>";

});
