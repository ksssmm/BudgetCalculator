const Expenses = () => {
  const [expenses, setExpenses] = useState([]); 
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2000);  

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      {notification && (
        <div 
          className={`bg-${notification.type === "edit" ? "green" : "red"}-500 text-white p-4 mb-4 rounded`}
        >
          {notification.message}
        </div>
      )}
      {expenses.map(expense => (
        <ExpenseItem 
          key={expense.id}
          expense={expense}
          expenses={expenses}
          setExpenses={setExpenses}
          setNotification={setNotification}
        />
      ))}
    </div>
  );
};
