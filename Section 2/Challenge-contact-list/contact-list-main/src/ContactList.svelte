<script>
  import contactStore from './store/contact.store';
  function onEdit(contactId) {
    contactStore.editContact(contactId);
  }
  function onDelete(contactId) {
    contactStore.delete(contactId);
  }
</script>

{#each $contactStore.contacts as contact (contact.id)}
  <div class="row">
    <div class="column">
      Name: {contact.name}
    </div>
    <div class="column">
      Phone: {contact.phone}
    </div>
  </div>
  <div class="row">
    <div class="column">
      {contact.description}
    </div>
  </div>
  <div class="row">
    <div class="column">
      <button on:click={() => onEdit(contact.id)} class="button">Edit</button>
      <button on:click={() => onDelete(contact.id)} class="button"
        >Delete</button
      >
    </div>
  </div>
{/each}
