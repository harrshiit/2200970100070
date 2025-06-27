const logAction = (action, details) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    action,
    details
  };
  // In a real app, this would send to a server
  console.log("LOG ENTRY:", JSON.stringify(logEntry));
};
export default logAction;