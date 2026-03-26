type SyncStatus = 'online' | 'offline' | 'syncing';

interface SyncAction {
  id: string;
  type: string;
  payload: any;
  timestamp: string;
}

class OfflineSyncService {
  private status: SyncStatus = 'online';
  private queue: SyncAction[] = [];

  setOnlineStatus(isOnline: boolean) {
    this.status = isOnline ? 'online' : 'offline';
    console.log(`[SYNC] System is now ${this.status.toUpperCase()}`);
    if (this.status === 'online' && this.queue.length > 0) {
      this.syncNow();
    }
  }

  queueAction(type: string, payload: any) {
    if (this.status === 'online') {
      console.log(`[SYNC] Direct Sync: ${type}`, payload);
      return;
    }

    const action: SyncAction = {
      id: `SYNC-${Date.now()}`,
      type,
      payload,
      timestamp: new Date().toISOString()
    };
    
    this.queue.push(action);
    console.warn(`[OFFLINE] Action Queued: ${type}. Total pending: ${this.queue.length}`);
  }

  async syncNow() {
    this.status = 'syncing';
    console.log(`[SYNC] Syncing ${this.queue.length} pending actions...`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    this.queue = [];
    this.status = 'online';
    console.log('[SYNC] Database fully synchronized.');
  }

  getStatus() { return this.status; }
  getPendingCount() { return this.queue.length; }
}

export const syncService = new OfflineSyncService();
