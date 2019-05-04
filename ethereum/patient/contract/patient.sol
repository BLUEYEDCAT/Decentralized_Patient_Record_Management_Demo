pragma solidity ^0.4.17;


contract Patient {


    //crete a struct for the patient info with index
    struct PatientStruct1 {
        string patientSurname;
        string patientGivenName;
        string patientGender;
        uint   patientAge;
        uint   patientMedicalNo;
        uint   index;
    }

    struct PatientStruct2 {
        string patientEmail;
        string patientPreferedLanguages;
        string patientNationality;
        uint   patientPhone;
        string patientProfilePicture;
    }


    event LogNewPatient (
            address indexed patientAddress,
            uint  index,
            string patientSurname,
            string patientGivenName,
            string patientNationality,
            uint currentTime
             );
    event LogUpdateEmail(
            address indexed patientAddress,
            string patientEmail,
            uint currentTime
        );
    event LogUpdateLanguage(
            address indexed patientAddress,
            string patientLanguage,
            uint currentTime
        );
    event LogUpdateNationality(
            address indexed patientAddress,
            string patientNationality,
            uint currentTime
        );
    event LogUpdatePhone(
            address indexed patientAddress,
            uint previousPhone,
            uint currentTime
        );


    //map the address with the patient info struct
    mapping(address => PatientStruct1) private patientStructs1;
    mapping(address => PatientStruct2) private patientStructs2;
    address [] private patientIndex;
    uint public currentTime;
    string private previousValue;
    uint private previousPhone;


    function insertPatient(

            address patientAddress,
            string patientSurname,
            string patientGivenName,
            string patientGender,
            uint   patientAge,
            string patientEmail,
            string patientPreferedLanguages,
            string patientNationality,
            uint   patientPhone,
            uint   patientMedicalNo,
            string patientProfilePicture)    public returns(uint index){

            patientStructs1[patientAddress].patientSurname = patientSurname;
            patientStructs1[patientAddress].patientGivenName = patientGivenName;
            patientStructs1[patientAddress].patientGender = patientGender;
            patientStructs1[patientAddress].patientAge = patientAge;
            patientStructs2[patientAddress].patientEmail = patientEmail;
            patientStructs2[patientAddress].patientPreferedLanguages = patientPreferedLanguages;
            patientStructs2[patientAddress].patientNationality = patientNationality;
            patientStructs2[patientAddress].patientPhone = patientPhone;
            patientStructs1[patientAddress].patientMedicalNo = patientMedicalNo;
            patientStructs2[patientAddress].patientProfilePicture = patientProfilePicture;
            patientStructs1[patientAddress].index = patientIndex.push(patientAddress) - 1;


            LogNewPatient(
                patientAddress,
                patientStructs1[patientAddress].index,
                patientSurname,
                patientGivenName,
                patientNationality,
                block.timestamp
                );
            return patientIndex.length - 1;
        }



    function getPatientInfo(address patientAddress) public constant returns(
            string patientSurname,
            string patientGivenName,
            string patientGender,
            uint   patientAge,
            string patientProfilePicture,
            uint index
        ){
            return(
                patientStructs1[patientAddress].patientSurname,
                patientStructs1[patientAddress].patientGivenName,
                patientStructs1[patientAddress].patientGender,
                patientStructs1[patientAddress].patientAge,
                patientStructs2[patientAddress].patientProfilePicture,

                patientStructs1[patientAddress].index);

    }


    function getPatientDetail(address patientAddress) public constant returns(
            string patientEmail,
            string patientPreferedLanguages,
            string patientNationality,
            uint   patientPhone,
            uint   patientMedicalNo
        ){
            return(
                patientStructs2[patientAddress].patientEmail,
                patientStructs2[patientAddress].patientPreferedLanguages,
                patientStructs2[patientAddress].patientNationality,
                patientStructs2[patientAddress].patientPhone,
                patientStructs1[patientAddress].patientMedicalNo
                );
        }
    function updatePatientEmail(address patientAddress, string patientEmail)
        public returns (bool success){
        previousValue = patientStructs2[patientAddress].patientEmail;
        patientStructs2[patientAddress].patientEmail = patientEmail;


        LogUpdateEmail(
            patientAddress,
            previousValue,
            block.timestamp
            );

        return true;
    }
    function updatePatientLanguage(address patientAddress,string patientLanguage)
        public returns (bool success) {
            previousValue = patientStructs2[patientAddress].patientPreferedLanguages;
            patientStructs2[patientAddress].patientPreferedLanguages = patientLanguage;

            LogUpdateLanguage(
                patientAddress,
                previousValue,
                block.timestamp
                );
            return true;
    }
        function updatePatientNationality(address patientAddress,string patientNationality)
        public returns (bool success) {
            previousValue = patientStructs2[patientAddress].patientNationality;
            patientStructs2[patientAddress].patientNationality = patientNationality;

            LogUpdateNationality(
                patientAddress,
                previousValue,
                block.timestamp
                );
            return true;
    }

        function updatePatientPhone(address patientAddress,uint patientPhone)
        public returns (bool success) {
            previousPhone = patientStructs2[patientAddress].patientPhone;
            patientStructs2[patientAddress].patientPhone = patientPhone;

            LogUpdatePhone(
                patientAddress,
                previousPhone,
                block.timestamp
                );
            return true;
    }



    function isPatient(address patientAddress) public constant returns(bool isRegistered) {
        if(patientIndex.length == 0) return false;
        return (patientIndex[patientStructs1[patientAddress].index] == patientAddress);
    }


}
