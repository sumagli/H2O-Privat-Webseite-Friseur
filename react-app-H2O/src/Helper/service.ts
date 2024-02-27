import React from 'react';
import axios from 'axios';

interface VacationMessageData {
    message: string;
    showMessage: boolean;
}

const useVacationMessage = () => {
    const [vacationMessageData, setVacationMessageData] = React.useState<VacationMessageData>({ message: '', showMessage: false });
    const apikey = "9014fb69f2ec7c61df63efe7cb08ffa7a19068860b1fa4aeb9c75001d13d3e30d158b22e57610482368716b7bf5d49f19f82db98fba26e2af93c9153528738ce1913c94d96213c152ec30bd7081117b92adcca8788d7e2f15d321d988f3c11b0f4c617fbb8ee0d06bf1af299078396fb1567856dd15d554f188bd9cbc4e19189";

    React.useEffect(() => {
        const fetchVacationMessage = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/Urlaubsnachricht', {
                    headers: {
                        Authorization: 'Bearer ' + apikey,
                    },
                });
                if (response.data && response.data.data.attributes) {
                    setVacationMessageData({
                        message: response.data.data.attributes.Nachricht,
                        showMessage: response.data.data.attributes.Nachricht_Anzeigen,
                    });
                }
            } catch (error) {
                console.error('Error fetching vacation message:', error);
            }
        };

        fetchVacationMessage();
    }, []);

    return vacationMessageData;
};

export default useVacationMessage;
