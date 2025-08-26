import React from 'react';
import '../styles/components/TeamSection.css';

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  location: string;
  status: 'available' | 'busy';
  badges: string[];
  jobSuccess: number;
  totalEarnings: string;
  totalJobs: number;
  totalHours: string;
  specialties: string[];
  hourlyRate: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'vladyslav',
    name: 'Vladyslav V.',
    avatar: '/images/team/vladyslav.jpg',
    location: 'Kharkiv, Ukraine',
    status: 'available',
    badges: ['Top Rated Plus', '100% Job Success'],
    jobSuccess: 100,
    totalEarnings: '$300K+',
    totalJobs: 47,
    totalHours: '9,752',
    specialties: ['Full Stack Development', 'Data Extraction'],
    hourlyRate: '$25.00 - $35.00'
  },
  {
    id: 'aeoncodes',
    name: 'Aeoncodes',
    avatar: '/images/team/aeoncodes.jpg',
    location: 'Global Team',
    status: 'available',
    badges: ['100% Job Success'],
    jobSuccess: 100,
    totalEarnings: '$70K+',
    totalJobs: 16,
    totalHours: '1,193',
    specialties: ['Development Agency', 'Tech Solutions'],
    hourlyRate: '$29.00 - $40.00'
  },
  {
    id: 'valerii',
    name: 'Valerii V.',
    avatar: '/images/team/valerii.jpg',
    location: 'Kharkiv, Ukraine',
    status: 'available',
    badges: ['Top Rated Plus', '100% Job Success'],
    jobSuccess: 100,
    totalEarnings: '$400K+',
    totalJobs: 134,
    totalHours: '10,271',
    specialties: ['Full Stack Development', 'Data Mining'],
    hourlyRate: '$29.00 - $40.00'
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Trusted professionals with proven track records on Upwork, delivering exceptional results for betting and analytics projects worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="upwork-profile-card bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Header - Fixed Height */}
              <div className="flex items-start space-x-4 mb-4 min-h-[90px]">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-neutral-200 overflow-hidden border-2 border-neutral-100">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=80`;
                      }}
                    />
                  </div>
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full border-2 border-white ${
                    member.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-semibold text-neutral-800">{member.name}</h3>
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center upwork-verified-badge">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 mb-3 flex items-center">
                    <i className="fa-solid fa-location-dot mr-2 text-neutral-400"></i>
                    {member.location}
                  </p>
                  <div className="flex items-center space-x-2 text-sm mb-4">
                    <i className="fa-solid fa-bolt text-purple-500"></i>
                    <span className="text-purple-600 font-medium">
                      {member.status === 'available' ? 'Available now' : 'Busy'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-neutral-100 mb-6"></div>

              {/* Badges Section - Fixed Height */}
              <div className="mb-3 h-[70px] flex flex-col justify-center gap-1.5">
                {member.badges.includes('100% Job Success') && (
                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 w-fit">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-crown text-white text-xs"></i>
                    </div>
                    <span className="text-xs font-semibold text-blue-700">100% Job Success</span>
                  </div>
                )}
                {member.badges.includes('Top Rated Plus') && (
                  <div className="flex items-center space-x-2 bg-pink-50 px-3 py-1.5 rounded-full border border-pink-200 w-fit">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-star text-white text-xs"></i>
                    </div>
                    <span className="text-xs font-semibold text-pink-700">Top Rated Plus</span>
                  </div>
                )}
              </div>

              {/* Separator */}
              <div className="border-t border-neutral-100 mb-3"></div>

              {/* Specialties Section - Fixed Height */}
              <div className="mb-3 h-[80px] flex flex-col justify-start">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">View profile</h4>
                <div className="space-y-1">
                  {member.specialties.map((specialty, index) => (
                    <div key={index} className="text-sm text-neutral-600 font-medium">{specialty}</div>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-neutral-100 mb-3"></div>

              {/* Stats Section - Fixed Height */}
              <div className="h-[60px] flex items-end">
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <div className="text-xl font-bold text-neutral-800">{member.totalEarnings}</div>
                    <div className="text-xs text-neutral-500 whitespace-nowrap">Total earnings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-neutral-800">{member.totalJobs}</div>
                    <div className="text-xs text-neutral-500 whitespace-nowrap">Total jobs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-neutral-800">{member.totalHours}</div>
                    <div className="text-xs text-neutral-500 whitespace-nowrap">Total hours</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-neutral-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-2">Combined Team Excellence</h3>
            <p className="text-neutral-600">Our collective experience and achievements</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">$770K+</div>
              <div className="text-sm text-neutral-600">Total Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">197</div>
              <div className="text-sm text-neutral-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">21,216</div>
              <div className="text-sm text-neutral-600">Hours Worked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-neutral-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
