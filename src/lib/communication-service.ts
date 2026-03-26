export type ParentPhoneType = 'smartphone' | 'basic' | 'none';

export interface ParentProfile {
  id: string;
  name: string;
  phone: string;
  type: ParentPhoneType;
  language: 'english' | 'tamil';
}

export interface CommunicationLog {
  id: string;
  timestamp: string;
  recipient: string;
  method: 'whatsapp' | 'sms' | 'ivr' | 'print';
  content: string;
  status: 'sent' | 'delivered' | 'read' | 'pending';
}

class CommunicationService {
  private logs: CommunicationLog[] = [];

  // Mock Parent Data
  private parentProfiles: Record<string, ParentProfile> = {
    'p1': { id: 'p1', name: 'John Doe', phone: '+91 9876543210', type: 'smartphone', language: 'english' },
    'p2': { id: 'p2', name: 'Velmurugan', phone: '+91 9876543211', type: 'basic', language: 'tamil' },
    'p3': { id: 'p3', name: 'Arjun Singh', phone: 'Offline', type: 'none', language: 'english' },
  };

  sendNotification(parentId: string, message: { en: string; ta: string }, payload?: any) {
    const parent = this.parentProfiles[parentId];
    if (!parent) return;

    let method: CommunicationLog['method'] = 'whatsapp';
    let content = message.en;

    if (parent.type === 'smartphone') {
      method = 'whatsapp';
      content = parent.language === 'tamil' ? message.ta : message.en;
    } else if (parent.type === 'basic') {
      method = 'sms'; // Could also trigger IVR
      content = parent.language === 'tamil' ? message.ta : message.en;
    } else {
      method = 'print';
      content = `[PRINT NOTICE] ${message.en}`;
    }

    const log: CommunicationLog = {
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      recipient: parent.name,
      method,
      content,
      status: 'sent'
    };

    console.log(`[COMM-HUB] Sending via ${method} to ${parent.name}: ${content}`);
    this.logs.unshift(log);

    // Simulate IVR if basic
    if (parent.type === 'basic') {
      console.log(`[IVR-TRIGGER] Automated Voice Call initiated in ${parent.language.toUpperCase()}`);
    }

    return log;
  }

  getLogs() {
    return this.logs;
  }

  getParentProfiles() {
    return Object.values(this.parentProfiles);
  }
}

export const comms = new CommunicationService();
