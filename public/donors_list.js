$( function () {
    let donorList = $('#donor-list')

    fetchDonors(function (donors){
        //donorList.empty()
        for(donor of donors){
            donorList.append(createDonor(donor))
        }
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> 7ad18523f4e97d88a3ca08a6a812e53b38cc7881
