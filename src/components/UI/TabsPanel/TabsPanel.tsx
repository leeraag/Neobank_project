import { FC, useState, ReactNode } from 'react';
import './tabsPanel.scss';

type TTab = {
    title: string;
    content: ReactNode;
}
  
type TTabsPanelProps = {
    tabs: TTab[];
}
  
const TabsPanel: FC<TTabsPanelProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
  
    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };
  
    return (
      <div>
        <div className="tabs">
          {
            tabs.map((tab, index) => (
              <button key={index} onClick={() => handleTabClick(index)} className={index === activeTab ? 'active' : ''}>
                {tab.title}
              </button>
            ))
          }
        </div>
        <div className="tab__content">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  };

export { TabsPanel };