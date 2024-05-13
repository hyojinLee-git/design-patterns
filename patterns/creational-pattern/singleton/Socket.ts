class Socket {
    private static instance: Socket;

    private constructor() {}

    public static getInstance(): Socket {
        if (!Socket.instance) {
            Socket.instance = new Socket();
        }

        return Socket.instance;
    }

    public static isConnected() {
        if (Socket.instance) return true;
        return false;
    }
}

export default Socket;
