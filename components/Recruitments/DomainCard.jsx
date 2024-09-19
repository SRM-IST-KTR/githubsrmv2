import React from "react";

const DomainCard = ({ domainName, description, subDomains, icon }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 max-w-sm">
            <div className="flex items-center mb-4">
                <div className="text-bright_green text-3xl mr-3">
                    {icon}
                </div>
                <h2 className="text-2xl font-semibold">{domainName}</h2>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            <h3 className="text-lg font-semibold mb-2">Sub Domains:</h3>
            <ul className="list-disc ml-6">
                {subDomains.map((subDomain, index) => (
                    <li key={index} className="text-gray-300">{subDomain}</li>
                ))}
            </ul>
        </div>
    );
};

export default DomainCard;