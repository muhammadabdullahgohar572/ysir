"use client";

import { useEffect, useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  RefreshCw,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle
} from "lucide-react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch Orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/order", { method: "GET" });

      if (!res.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await res.json();
      setOrders(data.orders || []);
      setFilteredOrders(data.orders || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter orders based on search and status
  useEffect(() => {
    let filtered = orders;

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(order =>
        order.name?.toLowerCase().includes(term) ||
        order.email?.toLowerCase().includes(term) ||
        order.phone?.includes(term) ||
        order.product?.toLowerCase().includes(term) ||
        order._id?.toLowerCase().includes(term)
      );
    }

    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, orders]);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch("/api/order", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          status: newStatus,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update order status");
      }

      // Update local state
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );

      // Refresh the list
      fetchOrders();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete order
  const deleteOrder = async (orderId) => {
    if (!confirm("Are you sure you want to delete this order?")) {
      return;
    }

    try {
      const res = await fetch("/api/order", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete order");
      }

      // Remove from local state
      setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
    } catch (err) {
      setError(err.message);
    }
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <Clock size={14} />;
      case "Processing":
        return <RefreshCw size={14} />;
      case "Completed":
        return <CheckCircle size={14} />;
      case "Cancelled":
        return <XCircle size={14} />;
      default:
        return <AlertCircle size={14} />;
    }
  };

  // View order details
  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Error: {error}</div>
          <button
            onClick={fetchOrders}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">All Orders</h1>
        <p className="text-gray-600">
          Total: {filteredOrders.length} order(s) found
          {statusFilter !== "all" && ` • ${statusFilter}: ${filteredOrders.filter(order => order.status === statusFilter).length}`}
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full md:w-64"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white w-full md:w-48"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={fetchOrders}
              className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No orders found</div>
            <p className="text-gray-500">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filters" 
                : "No orders have been placed yet"}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Info
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Files
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    {/* Order Details */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900">{order.name}</div>
                        <div className="text-sm text-gray-600">{order.email}</div>
                        <div className="text-sm text-gray-600">{order.phone}</div>
                        <div className="text-xs text-gray-500">
                          ID: {order._id?.substring(0, 8)}...
                        </div>
                        {order.user_id && (
                          <div className="text-xs text-gray-500">
                            User: {order.user_id?.substring(0, 8)}...
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Product Info */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900">{order.product}</div>
                        <div className="text-sm text-gray-600">
                          Size: {order.width} x {order.height}
                        </div>
                        <div className="text-sm text-gray-600">
                          Qty: {order.quantity}
                        </div>
                        {order.colors && (
                          <div className="text-sm text-gray-600">
                            Colors: {order.colors}
                          </div>
                        )}
                        {order.backing && (
                          <div className="text-sm text-gray-600">
                            Backing: {order.backing}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Files */}
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {order.files && order.files.length > 0 ? (
                          order.files.slice(0, 3).map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`Design ${i + 1}`}
                              className="w-12 h-12 rounded border object-cover cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => window.open(img, '_blank')}
                            />
                          ))
                        ) : (
                          <span className="text-gray-400 text-sm">No files</span>
                        )}
                        {order.files && order.files.length > 3 && (
                          <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center text-xs text-gray-500">
                            +{order.files.length - 3}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)} focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => viewOrderDetails(order)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order._id, "Processing")}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Mark as Processing"
                        >
                          <RefreshCw size={16} />
                        </button>
                        <button
                          onClick={() => deleteOrder(order._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Order"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XCircle size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Customer Information
                  </h3>
                  <div>
                    <label className="text-sm text-gray-500">Name</label>
                    <p className="font-medium">{selectedOrder.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="font-medium">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Phone</label>
                    <p className="font-medium">{selectedOrder.phone}</p>
                  </div>
                  {selectedOrder.source && (
                    <div>
                      <label className="text-sm text-gray-500">Source</label>
                      <p className="font-medium">{selectedOrder.source}</p>
                    </div>
                  )}
                </div>

                {/* Order Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Order Information
                  </h3>
                  <div>
                    <label className="text-sm text-gray-500">Product</label>
                    <p className="font-medium">{selectedOrder.product}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Size</label>
                    <p className="font-medium">{selectedOrder.width} x {selectedOrder.height}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Quantity</label>
                    <p className="font-medium">{selectedOrder.quantity}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Backing</label>
                    <p className="font-medium">{selectedOrder.backing}</p>
                  </div>
                  {selectedOrder.colors && (
                    <div>
                      <label className="text-sm text-gray-500">Colors</label>
                      <p className="font-medium">{selectedOrder.colors}</p>
                    </div>
                  )}
                </div>

                {/* Additional Details */}
                {(selectedOrder.instructions || selectedOrder.budget || selectedOrder.urgency) && (
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      Additional Details
                    </h3>
                    {selectedOrder.instructions && (
                      <div>
                        <label className="text-sm text-gray-500">Instructions</label>
                        <p className="font-medium">{selectedOrder.instructions}</p>
                      </div>
                    )}
                    {selectedOrder.budget && (
                      <div>
                        <label className="text-sm text-gray-500">Budget</label>
                        <p className="font-medium">{selectedOrder.budget}</p>
                      </div>
                    )}
                    {selectedOrder.urgency && (
                      <div>
                        <label className="text-sm text-gray-500">Urgency</label>
                        <p className="font-medium">{selectedOrder.urgency}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Design Files */}
                {selectedOrder.files && selectedOrder.files.length > 0 && (
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                      Design Files ({selectedOrder.files.length})
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedOrder.files.map((file, index) => (
                        <div key={index} className="text-center">
                          <img
                            src={file}
                            alt={`Design ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border cursor-pointer hover:opacity-80 transition-opacity mb-2"
                            onClick={() => window.open(file, '_blank')}
                          />
                          <p className="text-xs text-gray-500 truncate">
                            Design {index + 1}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    updateOrderStatus(selectedOrder._id, "Completed");
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;