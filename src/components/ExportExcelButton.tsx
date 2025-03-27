import API from "../api/axious";
import FilterInterface from "../interfaces/filterInterface";

const ExportExcelButton = ( {filters} : {filters: FilterInterface} ) => {
    const onClick = async () => {
      try {
        const params = new URLSearchParams();

        console.log(filters);

        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });

        console.log(params.toString());
  
        const response = await API.get(`/payments/export?${params.toString()}`, {
          responseType: 'blob', // важен для корректной загрузки файла
        });
  
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = url;
        a.download = 'payments.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Ошибка при экспорте в Excel:", error);
      }
    };
  
    return (
      <button
        onClick={onClick}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Экспорт в Excel
      </button>
    );
  };
  
  export default ExportExcelButton;