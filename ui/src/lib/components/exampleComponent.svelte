<script>
    let responseData = null;

    async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/data'); // Make a GET request to the API route
        if (response.ok) {
        responseData = await response.json(); // Parse the JSON response
        } else {
        responseData = { error: 'Error fetching data' };
        }
    } catch (error) {
        responseData = { error: 'Error fetching data' };
    }
    }
</script>

<main>
    <div id="exampleComponent">
      <button on:click={fetchData}>Fetch Data</button>
  
      {#if responseData !== null}
        {#if responseData.error}
          <p>Error: {responseData.error}</p>
        {:else}
          <p>Data from the server: {responseData.message}</p>
          <p>Timestamp: {responseData.timestamp}</p>
        {/if}
      {/if}
    </div>
</main>

<style>

</style>