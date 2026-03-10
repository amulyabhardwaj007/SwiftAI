import React, { useEffect, useState } from "react";
import { Sparkles, Trash2 } from "lucide-react";
import CreationItem from "../components/CreationItem";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";
axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL ;
const Dashboard = () => {
  const [creaions, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [clearing, setClearing] = useState(false);
  const { getToken } = useAuth();

  const getCreations = async () => {
    try {
      const { data } = await axios.get("/v1/api/user/get-user-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message || "Failed to fetch creations");
      }  
    } catch (error) {
      toast.error(error.message || "Failed to fetch creations");
    } finally {   
      setLoading(false);
    }
  };

  const handleDeleteCreation = async (id) => {
    const confirmed = window.confirm(
      "Delete this activity from your history?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      const { data } = await axios.delete(`/v1/api/user/delete-creation/${id}`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setCreations((current) => current.filter((item) => item.id !== id));
        toast.success(data.message || "Creation deleted successfully");
      } else {
        toast.error(data.message || "Failed to delete creation");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete creation");
    } finally {
      setDeletingId(null);
    }
  };

  const handleClearHistory = async () => {
    if (creaions.length === 0) return;

    const confirmation = window.prompt(
      'This will delete your entire dashboard history.\nType CLEAR to confirm.'
    );

    if (confirmation !== "CLEAR") {
      if (confirmation !== null) {
        toast.error("Confirmation text did not match");
      }
      return;
    }

    try {
      setClearing(true);
      const { data } = await axios.delete("/v1/api/user/clear-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setCreations([]);
        toast.success(data.message || "History cleared successfully");
      } else {
        toast.error(data.message || "Failed to clear history");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to clear history");
    } finally {
      setClearing(false);
    }
  };

  useEffect(() => {
    getCreations();
  }, []);
  if(loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }
  return (
    <div className="h-full overflow-y-scroll p-6 ">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl 
        border border-gray-200 shadow-sm"
        >
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold">{creaions.length}</h2>
          </div>
          <div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] 
          flex items-center justify-center  text-white"
          >
            <Sparkles className="w-5 text-white" />
          </div>
        </div>
        <button
          type="button"
          onClick={handleClearHistory}
          disabled={clearing || creaions.length === 0}
          className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
          {clearing ? "Clearing..." : "Clear All History"}
        </button>
      </div>
      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {
          creaions.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
              No activity yet. Start using Swift and your history will show up here.
            </div>
          ) : (
            creaions.map((item)=>(
              <CreationItem
                key={item.id}
                item={item}
                onDelete={handleDeleteCreation}
                deleting={deletingId === item.id}
              />
            ))
          )
        }

      </div>
    </div>
  );
};

export default Dashboard;
