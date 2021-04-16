$( function () {
    let donorList = $('#donor-list')

    fetchDonors(function (donors){
        //donorList.empty()
        for(donor of donors){
            donorList.append(createDonor(donor))
        }
    })
})
