'use client';

import { useState, useEffect } from 'react';
import { Mail, Calendar, Building, User, MessageSquare, Paperclip, Download, Eye } from 'lucide-react';

interface FormSubmission {
  timestamp: string;
  type: string;
  data: {
    audienceType: string;
    name: string;
    email: string;
    company: string;
    role: string;
    message: string;
    attachmentCount: number;
    attachmentNames?: string[];
    submittedAt: string;
  };
}

export default function SubmissionsDashboard() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
      } else {
        setError('Failed to load submissions');
      }
    } catch (err) {
      setError('Error loading submissions');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getAudienceTypeColor = (type: string) => {
    switch (type) {
      case 'business-owner': return 'bg-blue-100 text-blue-800';
      case 'investor': return 'bg-green-100 text-green-800';
      case 'intermediary': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAudienceTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indus-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchSubmissions}
            className="px-4 py-2 bg-indus-blue text-white rounded-lg hover:bg-opacity-90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-indus-blue">Contact Form Submissions</h1>
              <p className="text-gray-600 mt-1">
                {submissions.length} total submission{submissions.length !== 1 ? 's' : ''}
              </p>
            </div>
            <button
              onClick={fetchSubmissions}
              className="px-4 py-2 bg-cerulean text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
            <p className="text-gray-600">Contact form submissions will appear here when received.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Submissions List */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">All Submissions</h2>
              {submissions.map((submission, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-sm border p-6 cursor-pointer transition-all hover:shadow-md ${
                    selectedSubmission === submission ? 'ring-2 ring-cerulean border-cerulean' : ''
                  }`}
                  onClick={() => setSelectedSubmission(submission)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cerulean rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{submission.data.name}</h3>
                        <p className="text-sm text-gray-600">{submission.data.email}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAudienceTypeColor(submission.data.audienceType)}`}>
                      {getAudienceTypeLabel(submission.data.audienceType)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(submission.timestamp)}
                  </div>
                  
                  {submission.data.company && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Building className="w-4 h-4 mr-1" />
                      {submission.data.company}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {submission.data.message}
                  </p>
                  
                  {submission.data.attachmentCount > 0 && (
                    <div className="flex items-center text-sm text-cerulean mt-2">
                      <Paperclip className="w-4 h-4 mr-1" />
                      {submission.data.attachmentCount} attachment{submission.data.attachmentCount !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Submission Details */}
            <div className="lg:sticky lg:top-8">
              {selectedSubmission ? (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Submission Details</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAudienceTypeColor(selectedSubmission.data.audienceType)}`}>
                      {getAudienceTypeLabel(selectedSubmission.data.audienceType)}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <p className="text-gray-900">{selectedSubmission.data.name}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <a 
                        href={`mailto:${selectedSubmission.data.email}`}
                        className="text-cerulean hover:underline"
                      >
                        {selectedSubmission.data.email}
                      </a>
                    </div>

                    {selectedSubmission.data.company && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <p className="text-gray-900">{selectedSubmission.data.company}</p>
                      </div>
                    )}

                    {selectedSubmission.data.role && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <p className="text-gray-900">{selectedSubmission.data.role}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Submitted</label>
                      <p className="text-gray-900">{formatDate(selectedSubmission.timestamp)}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-900 whitespace-pre-wrap">{selectedSubmission.data.message}</p>
                      </div>
                    </div>

                    {selectedSubmission.data.attachmentCount > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Attachments ({selectedSubmission.data.attachmentCount})
                        </label>
                        <div className="space-y-2">
                          {selectedSubmission.data.attachmentNames?.map((filename, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600 bg-gray-50 rounded p-2">
                              <Paperclip className="w-4 h-4 mr-2" />
                              {filename}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Note: Attachments are processed but not stored in this dashboard for security reasons.
                        </p>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <a
                        href={`mailto:${selectedSubmission.data.email}?subject=Re: Your inquiry to Indus River Group`}
                        className="w-full bg-cerulean text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Submission</h3>
                  <p className="text-gray-600">Click on any submission to view its details here.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}